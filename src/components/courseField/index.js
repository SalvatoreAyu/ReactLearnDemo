import React from 'react'
import FieldItem from './fieldItem'
import { getCourseFields } from '../../models/index'
export default class CourseField extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            fieldList: []
        }
    }
    async getData() {
        const res = await getCourseFields()
        const list = res.data.data
        this.setState(
            { fieldList: list }
        )
    }
    componentDidMount() {
        this.getData()
    }
    render() {
        const { fieldList } = this.state
        const { curTab, changeCourseField } = this.props
        return (
            <>
                <h1>列表1</h1>
                <ul>
                    {fieldList.map(item => {
                        return (
                            <FieldItem
                                key={item.field}
                                item={item}
                                curTab={curTab}
                                changeCourseField={(field) => changeCourseField(field)}
                            ></FieldItem>
                        )
                    })
                    }
                </ul >
            </>
        )
    }
}