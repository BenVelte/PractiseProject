<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: Content-Type");
header("Access-Control-Allow-Methods: POST");

// IMPORTANT... change directory or copy this file in right one
$tasksFile = 'C:\xampp\htdocs\tasks.txt'; // Path to the tasks text file

// Save tasks to the text file
function saveTasks($tasks) {
  global $tasksFile;
  file_put_contents($tasksFile, json_encode($tasks));
}

// Load tasks from the text file
function loadTasks() {
  global $tasksFile;
  if (file_exists($tasksFile)) {
    $tasksData = file_get_contents($tasksFile);
    return json_decode($tasksData, true);
  }
  return [];
}

// Handle API requests
if (isset($_GET['action'])) {
    $action = $_GET['action'];
   
    if ($action === 'save') {
      $requestBody = file_get_contents('php://input');
      
      if($requestBody != null) {
        $data = json_decode($requestBody, true);
        if($data != null)
        {
          saveTasks($data);
          echo json_encode(['success' => true]);
        } 
      } 
    } elseif ($action === 'load') {
      $tasks = loadTasks();
      echo json_encode($tasks);
    }
  }
?>
