import React, { useState } from 'react';
import DashboardLayout from '../../layouts/DashboardLayout';
import { Card, CardContent, Button, Input, Badge } from '../../components/ui';
import { useCRMStore } from '../../store/crmStore';
import { Check, Plus, Calendar } from 'lucide-react';

export default function Tasks() {
  const { tasks, addTask, toggleTask } = useCRMStore();
  const [title, setTitle] = useState('');
  const [dueDate, setDueDate] = useState('');

  const handleAdd = (e: React.FormEvent) => {
    e.preventDefault();
    if (title && dueDate) {
      addTask({ title, dueDate, isCompleted: false });
      setTitle('');
      setDueDate('');
    }
  };

  return (
    <DashboardLayout>
      <div className="flex flex-col gap-6 max-w-4xl mx-auto">
        <div>
          <h1 className="text-xl font-bold tracking-tight">Tasks Checklist</h1>
          <p className="text-xs text-muted-foreground mt-1">Manage pending actions, due dates, and assignments.</p>
        </div>

        {/* Add Form */}
        <Card>
          <CardContent className="p-6">
            <form onSubmit={handleAdd} className="flex flex-col sm:flex-row gap-4 items-end">
              <div className="flex-1 w-full">
                <Input label="Task Description" placeholder="Follow up on pricing contract details..." value={title} onChange={(e) => setTitle(e.target.value)} />
              </div>
              <div className="w-full sm:w-48">
                <Input label="Due Date" type="date" value={dueDate} onChange={(e) => setDueDate(e.target.value)} />
              </div>
              <Button type="submit" className="gap-1.5 shrink-0 w-full sm:w-auto">
                <Plus size={16} />
                <span>Create Task</span>
              </Button>
            </form>
          </CardContent>
        </Card>

        {/* Task List */}
        <div className="flex flex-col gap-3">
          {tasks.map((task) => (
            <Card key={task.id} className={`p-4 flex items-center justify-between border ${task.isCompleted ? 'bg-muted/10 opacity-70' : 'bg-card'}`}>
              <div className="flex items-center gap-3">
                <button
                  onClick={() => toggleTask(task.id)}
                  className={`w-5 h-5 rounded border flex items-center justify-center transition-colors ${
                    task.isCompleted ? 'bg-indigo-600 border-indigo-600 text-white' : 'border-input hover:border-indigo-600'
                  }`}
                >
                  {task.isCompleted && <Check size={14} />}
                </button>
                <span className={`text-sm font-medium ${task.isCompleted ? 'line-through text-muted-foreground' : 'text-foreground'}`}>
                  {task.title}
                </span>
              </div>
              <div className="flex items-center gap-3">
                <Badge variant={task.isCompleted ? 'secondary' : 'outline'} className="gap-1 flex items-center">
                  <Calendar size={12} />
                  <span>{task.dueDate}</span>
                </Badge>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </DashboardLayout>
  );
}
