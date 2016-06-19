'use strict';
import React, {Component, PropTypes} from 'react';
import {List, ListItem} from 'material-ui/List';
import Add from 'material-ui/svg-icons/content/add';

export default class ApplicationDrawer extends Component {

  static propTypes = {
    items: PropTypes.array.isRequired,
    onClickAdd: PropTypes.func.isRequired
  };

  constructor (props) {
    super(props);

    this.handleTouchTapItem = this.handleTouchTapItem.bind(this);
  }

  handleTouchTapItem (evt) {
    evt.preventDefault();
    const applicationItem = evt.currentTarget.value;

    this.props.onClickAdd(applicationItem);
  }

  render () {
    const {items} = this.props;

    return (
      <List>
        <ListItem><h3>Applications</h3></ListItem>
        {items.length > 0 && items.map((item) => {
          return <ListItem
            key={item.payload_identifier}
            primaryText={item.payload_identifier}
            secondaryText={item.profile_uuid}
            leftIcon={<Add />}
            onTouchTap={this.handleTouchTapItem}
            value={item}
          />;
        })}
        {!items || items.length === 0 &&
        <p>There are currently no applications.</p>
        }
      </List>
    );
  }

}
