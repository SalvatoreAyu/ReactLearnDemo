import React from 'react'
import { connect } from 'react-redux'
import CourseField from '../../components/courseField'
import CourseList from '../../components/courseList'
import { changeCourseField } from '../../store/action/curTab'
class Course extends React.Component {
    render() {
        const { curTab, changeCourseField } = this.props
        return (
            <>
                <h1>this is redux page</h1>
                <CourseField curTab={curTab} changeCourseField={changeCourseField} />
                <CourseList curTab={curTab} />
            </>
        )
    }
}
export default connect(
    function mapStateToProps(state) {
        return {
            curTab: state.curTab.field
        }
    },
    function mapDispatchToProps(dispatch) {
        return {
            changeCourseField: (field) => dispatch(changeCourseField(field))
        }
    }
)(Course)
