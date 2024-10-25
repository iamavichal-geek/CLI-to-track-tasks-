```markdown
# CLI Task Manager

Project URL : https://roadmap.sh/projects/task-tracker

This is a command-line interface (CLI) tool built with Node.js, Express, and PostgreSQL. It provides a way to manage tasks by running commands directly in the terminal.

## Features
- Start a server with a simple `start` command.
- List all tasks.
- Add a new task with the current time.
- Update an existing task by specifying its ID.
- Delete a task by ID.

## Prerequisites
- Node.js (v14 or later)
- PostgreSQL
- A `.env` file in the project root with the following PostgreSQL environment variables:
  ```plaintext
  PG_USER=<your_pg_user>
  PG_HOST=<your_pg_host>
  PG_DATABASE=<your_pg_database>
  PG_PASSWORD=<your_pg_password>
  PG_PORT=<your_pg_port>
  ```

## Installation
1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd <repository-folder>
   ```

2. Install the dependencies:
   ```bash
   npm install
   ```

3. Ensure your PostgreSQL server is running and the database is set up.

4. Create a `.env` file in the root directory and add your PostgreSQL configuration.

## Usage

To use this CLI, you can run the following commands:

### 1. Start the Server
Start the Express server with:
```bash
./index.js start
```
This will start the server on the specified port (default: `3001`).

### 2. List All Tasks
Get a list of all tasks in the database:
```bash
./index.js list
```

### 3. Add a New Task
To add a new task with the current timestamp, use:
```bash
./index.js add -a "Your task description"
```
Example:
```bash
./index.js add -a "Complete project documentation"
```

### 4. Update an Existing Task
To update the description of a task, specify the `id` of the task to be updated and the new description:
```bash
./index.js update -u "Updated task description" -id <task_id>
```
Example:
```bash
./index.js update -u "Revise project requirements" -id 3
```

### 5. Delete a Task
To delete a task, specify the `id` of the task to be removed:
```bash
./index.js delete -id <task_id>
```
Example:
```bash
./index.js delete -id 3
```

## Notes
- Ensure that the PostgreSQL database is correctly set up and that the table `tasks` exists with the appropriate structure.
- You may need to give execution permission to the `index.js` file:
  ```bash
  chmod +x index.js
  ```

## License
This project is open-source and available under the [MIT License](LICENSE).

```
