import {NewTaskForm, NewTaskMapped} from "../new-task.component";

export default function mapFormToNewTaskFormat(task: NewTaskForm): NewTaskMapped {
	return {
		...task,
		tips: task.tips.length > 1 ? task.tips.map(tip => tip.tip) : []
	};
}
