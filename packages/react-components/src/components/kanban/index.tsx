import React from 'react';

import moment from 'moment';
import { TeamCircles } from '../..';
import styled from 'styled-components'
const Board = require('@lourenci/react-kanban').default;

import '@lourenci/react-kanban/dist/styles.css'

export interface GraphKanbanProps{
    className?: string;
  graph: {nodes: Array<any>, links: Array<any>};
  template?: Array<any>;
  selfish?: boolean;
  onClick?: (args: {item: object}) => void;
  onStatusChange?: (args: {card: object, status: string}) => void;
  onChange?: (args: {value: Array<any>}) => void;
  allowAddColumn?: boolean;
  allowAddCard?: boolean;
  user?: {id: string};
}

export const GraphKanban : React.FC<GraphKanbanProps> = ({
  graph = {nodes: [], links: []},
  template = [],
  className,
  selfish = false,
  allowAddColumn = false,
  allowAddCard = true,
  onClick,
  onStatusChange,
  onChange,
  user = {}
}) => {
    const [ columns, setColumns ] = React.useState([
        {
            id: 0,
            title: 'Blocked',
            cards: []
        },
        {
            id: 1,
            title: 'Backlog',
            cards: graph.nodes.filter((a) => a.status != "COMPLETED" && a.status != "BLOCKED").map((x) => ({
                id: x.id,
                title: x.data.label,
            }))
        },
        {
            id: 2,
            title: 'Doing',
            cards: []
        },
        {
            id: 3,
            title: 'Done',
            cards: []
        }
    ])

    const getColumns = () => {
        let _template : any = []
        if(template){
            _template = template || [];
        }

        const cols = template.map((col : any) => {
            let cards : Array<any> = [];
            if(col.status){
                cards = graph.nodes.filter((a) => {
                    return a.data.status == col.status
                }) || []
            }else if(typeof(col.numParents) == "number"){
                cards = graph.nodes.filter((node) => {
                    return graph.links.filter((link) => link.target == node.id).length <= col.numParents
                }) || []
            }

            return {
                ...col,
                cards: cards.filter((a : any) => {
                    if(!selfish) return true;
                    if(selfish) return (a.members || []).indexOf(user.id) > -1
                  }).sort((a : any, b : any) => {

                    if(!(a.data && a.data.dueDate)) a.data.dueDate = Infinity;
                    if(!(b.data && b.data.dueDate)) b.data.dueDate = Infinity

                    return a.data.dueDate - b.data.dueDate
                }).map((x : any) => {
                    let parents = graph.links.filter((a) => a.target == x.id).map((y) => graph.nodes.filter((a) => a.id == y.source)[0])
return {
                    ...x,
                    title: x.data.label,
                    description: parents.length > 0 && parents[0].data.label,
}
                })
            }
        })
        console.log(cols);
        return cols;
    }


    return (
        <div className={className}>
        <Board
            allowAddColumn={allowAddColumn}
            allowAddCard={allowAddCard}
            renderCard={(card : any) => {
                return (
                    <div onClick={() => {
                        if(onClick){
                            onClick({item: card})
                        }
                    }} className="react-kanban-card">
                        <div className="react-kanban-card__title">
                            {card.title}

                        </div>
                        {card.data.dueDate != Infinity && <div style={{textAlign: 'left'}}>
                                ETA: {moment(new Date(card.data.dueDate * 1000)).format('DD/MM/yyyy')}
                            </div>}
                        <div>
                            {card.description}
                        </div>
                        <TeamCircles members={(!Array.isArray(card.members) && typeof(card.members) == "object") ? [] : card.members || []} />

                    </div>
                )
            }}
            onCardDragEnd={(card : any, source : any, destination : any) => {
                console.log(source, destination)
                let cols = columns.slice()

                let fromIx = cols.map((x) => x.id).indexOf(source.fromColumnId);
                let toIx = cols.map((x) => x.id).indexOf(destination.toColumnId)

                let spliced = cols[fromIx].cards.splice(source.fromPosition, 1)
                cols[toIx].cards.splice(destination.toPosition, 0, spliced[0])


                if(onStatusChange) onStatusChange({card: card, status: template.filter((a) => a.id == destination.toColumnId)[0].status})
                if(onChange) onChange({value: cols})
                setColumns(cols)
            }}
            onColumnDragEnd={(_obj : any, source : any, destination : any) => {
                let cols = columns.slice()

                let spliced = cols.splice(source.fromPosition, 1)[0]
                cols.splice(destination.toPosition, 0, spliced)
                //if(onChange) onChange(cols)
                //setColumns(cols)
            }}
            children={{columns: getColumns()}} />
        </div>
    )
}


export const StyledKanban = styled(GraphKanban)`
    flex: 1;
    display: flex;

    .react-kanban-board{
        flex: 1;
        flex-direction: column;
    }

    .react-kanban-board div{
        flex: 1;
    }
`