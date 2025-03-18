<?php
session_start();

$filename = 'chat.json';

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $data = json_decode(file_get_contents('php://input'), true);
    $messages = file_exists($filename) ? json_decode(file_get_contents($filename), true) : [];
    $messages[] = $data;
    file_put_contents($filename, json_encode($messages));
    echo json_encode(['status' => 'success']);
    exit;
}

if ($_SERVER['REQUEST_METHOD'] === 'GET') {
    $messages = file_exists($filename) ? json_decode(file_get_contents($filename), true) : [];
    echo json_encode($messages);
    exit;
}
?>