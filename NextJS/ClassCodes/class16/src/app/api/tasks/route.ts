import { NextRequest, NextResponse } from "next/server";

const todoTasks: { id: number; title: string }[] = [];

let nextID: number = 1;

export async function GET() {
  return NextResponse.json(todoTasks);
}

export async function POST(request: NextRequest) {
  // json returns promise, so we need to await
  const body = await request.json();

  const newTask = {
    id: nextID++,
    title: body.title,
  };

  // push to array
  todoTasks.push(newTask);

  return NextResponse.json({
    message: "Task added successfully",
    task: newTask,
  });
}

export async function PUT(request: NextRequest) {
  // json returns promise, so we need to await
  const body = await request.json();

  // find the index no of the task
  const taskIndex = todoTasks.findIndex((task) => task.id === body.id);

  if (taskIndex === -1) {
    return NextResponse.json(
      {
        message: "Task not found",
      },
      { status: 404 }
    );
  }

  // update the task
  todoTasks[taskIndex].title = body.title;

  return NextResponse.json({
    message: "Task updated successfully",
  });
}

export async function DELETE(request: NextRequest) {
  // json returns promise, so we need to await
  const body = await request.json();

  // find the index no of the task
  const taskIndex = todoTasks.findIndex((task) => task.id === body.id);

  if (taskIndex === -1) {
    return NextResponse.json(
      {
        message: "Task not found",
      },
      { status: 404 }
    );
  }

  // splice: (start, deleteCount)

  // delete the task
  todoTasks.splice(taskIndex, 1);
  return NextResponse.json({
    message: "Task deleted successfully",
  });
}
