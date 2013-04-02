Usage
=====
Mortar is a jquery plugin for grid layouts.
```
    $('#container').mortar();
```
HTML:
```
    <div id="container">
        <div>First</div>
        <div>Second</div>
        <div>Third</div>
        <div>Forth</div>
        <div>Fith</div>
        <div>Sixth</div>
    </div>
```

Options
-------
The options object is the first parameter:
``` 
$('#container').mortar({columns: 6, filter: 'red', duration: 1000}) 
```

 - ``` columns ``` (integer) the number of columns in the grid
 - ``` filter ``` (string) the name of the class you want to filter from the grid
 - ``` duration ``` (integer) the duration of the animation. Set to 0 for no animation
