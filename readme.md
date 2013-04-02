Usage
=====
Mortar is a jquery plugin used for masonry grid layouts.
Javascript: 
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

Mortar requires each child element to have a set width and height.

Options
-------
''' columns ''' (integer) the number of columns in the grid
''' filter ''' (string) the name of the class you want to filter from the grid
''' duration ''' (integer) the duration of the animation. Set to 0 for no aninmation