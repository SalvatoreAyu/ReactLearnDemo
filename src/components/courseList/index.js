import React from 'react'
import { getCourseList } from '../../models/index'
import CourseItem from './courseItem'
export default class CourseList extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            CourseList: []
        }
    }
    async getData() {
        const res = await getCourseList()
        const list = res.data.data
        this.setState(
            {
                CourseList: list
            }
        )
    }
    componentDidMount() {
        this.getData()
    }
    render() {
        const { CourseList } = this.state
        return (
            <>
                <h1>列表2</h1>
                <ul>
                    {CourseList.map(item => {
                        return (
                            <CourseItem
                                key={item.id}
                                item={item}
                            ></CourseItem>
                        )
                    })
                    }
                </ul >
            </>
        )
    }
}