<!DOCTYPE html>
<!--
To change this license header, choose License Headers in Project Properties.
To change this template file, choose Tools | Templates
and open the template in the editor.
-->
 <?php
  //PHP code here
  ?>
<html>
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, intial-scale=1, shrink-to-fit=no">
        <style>
            .navBar
            {
                background-color: #e0ffe5;
                overflow: hidden;
            }
            .navBar a
            {
                float:left;
                text-align: center;
                color: #000000;
                padding: 16px 16px;
                font-size: 16px;
                
            }
            .navBar a:hoverOver
            {
                background-color: #99b09d;
            }
            .navBar a:active
            {
                background-color: #000000;
            }
            .header
            {
                text-align: center;
                color: black;
            }
        </style>
        <title>My website</title>
    </head>
    <body>
        <h1 class="header">My website</h1>
        <div class ="navBar">
            <a href="home.html">Home</a>
            <a href="aboutme.html">About me</a>
            <a href="game">Guess the square</a>
        </div>
    </body>
</html>
