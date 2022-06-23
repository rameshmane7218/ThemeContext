## FILE EDITOR

- This is simple nodejs program to edit files, based on arguments passed.
- This program support basic file operation like:
    - reading file
    - deleting file
    - creating new file
    - rename existing file
    - appending content in file 
    - listing all files and folders in given path

### Let's see one by one command line syntax

#### 1. read
Syntax : 

    node <codeFileName> read <readFileName>
Example : 

    node index.js read test.txt

#### 2. append
Syntax : 

    node <codeFileName> append <CONTENT> <appendFileName>
Example : 

    node index.js append "data to append" test.txt

#### 3. delete
Syntax : 

    node <codeFileName> delete <deleteFileName>
Example : 

    node index.js delete test.txt

#### 4. create
Syntax : 

    node <codeFileName> create <newFileName>
Example : 

    node index.js crate new.txt
    
#### 5. rename
Syntax : 

    node <codeFileName> rename <oldFileName> <newFileName>
Example : 

    node index.js rename test.txt renamed.txt
    
#### 6. list
Syntax : 

    node <codeFileName> list <path>
Example : 

    node index.js list .   // this will give you all files in current directory.
    node index.js list ..  // this will give you all files in one folder up directory.
    
