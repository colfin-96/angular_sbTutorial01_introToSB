import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Task } from '../models/task.model';

@Component({
  selector: 'app-pure-task-list',
  templateUrl: './pure-task-list.component.html',
})
export class PureTaskListComponent {
  @Input() loading = false;
  @Input() set tasks(arr: Task[]) {
    this.tasksInOrder = [
      ...arr.filter((t) => t.state === 'TASK_PINNED'),
      ...arr.filter((t) => t.state !== 'TASK_PINNED'),
    ];
  }
  @Output() onPinTask = new EventEmitter<Event>();
  @Output() onArchiveTask = new EventEmitter<Event>();

  tasksInOrder: Task[] = [];
}
