import React from 'react'

export default class CourseItem extends React.Component {
    render() {
        const { item } = this.props
        return (
            <li style={{ margin: '10px' }}>
                {item.courseName}
            </li>
        )
    }
}