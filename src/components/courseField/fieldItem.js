import React from 'react'
import './index.scss'
export default class FieldItem extends React.Component {
    render() {
        const { item, curTab, changeCourseField } = this.props
        return (
            <li style={{ margin: '10px' }}
                className={['fieldItem', item.field === curTab ? 'current' : ''].join(' ')}
                onClick={() => changeCourseField(item.field)}
            >
                { item.fieldName}
            </li >
        )
    }
}