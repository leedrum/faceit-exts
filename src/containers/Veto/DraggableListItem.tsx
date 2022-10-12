import * as React from 'react';
import { Draggable } from 'react-beautiful-dnd';

import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';

import { Map } from './typings';

export type DraggableListItemProps = {
  item: Map;
  index: number;
};

const DraggableListItem = ({ item, index }: DraggableListItemProps) => {
  return (
    <Draggable draggableId={item.name} index={index}>
      {(provided, snapshot) => (
        <ListItem
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          className="draggingListItem"
        >
          <ListItemText primary={item.name} />
        </ListItem>
      )}
    </Draggable>
  );
};

export default DraggableListItem;
