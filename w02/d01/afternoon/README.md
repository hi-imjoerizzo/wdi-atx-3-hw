# Notes: Workflow & Best Practices

### Lesson Objectives

* Identify popular shortcuts in the CLI
* Explain some benefits of editing the **.bash_profile**
* Create an alias in **.bash_profile**
* Edit the `$PATH` variable to include a new binary
* Identify popular shortcuts in Sublime 
* Determine an ideal setup for your browser, editor, terminal
* Discuss how to prevent bad habits
* Use proper indentation, consistent spacing, consistent casing in code variables, selectors, etc

## CLI Shortcuts

* `Tab` - Autocomplete for file/directory paths
* `Up/down keys` - Bring up the last commands run
* `Ctrl + A` - Jump to the beginning of the line 
* `Ctrl + E` - Jump to the end of the line
* `Ctrl + U` - Erase the current line so you can start over
* `Ctrl + W` - Delete the word before the cursor
* `Ctrl + R` - Search your command history for something you've run before
* `Cmd + T` - Open a new tab in the terminal window

### Navigate directories 

* `cd` - Change to the home directory 
* `cd ~` - Change to the home directory
* `cd ..` - Go up one directory
* `cd ../..` - Go up two directories, etc
* `cd /` - Go to the root directory
* `cd -` - Go to the last directory before navigating to the current directory

##### Drag files or folders into the terminal

Instead of typing in the full path to a file or folder, you can drag the asset directly in the terminal and it will print the full path onto the console.

<hr>

### Exercise: CLI Shortcut Practice

**10 min**

Let's spend a little time developing some muscle memory by practicing the shortcuts above. Open up the terminal and repeat each shortcut above multiple times. 

<hr>

### Working with .bash_profile

The **.bash_profile** allows us to: 

* add paths to programs we installed
* configure environment variables
* create aliases

If you view the hidden files in your home directory, you'll most likely see two files called **.bash_profile** and **.bashrc**.

* `.bash_profile`
  - Used by the Bash shell, the default shell we use in class
  - Executed when logging into the console with SSH or username/password
  - In OSX, the terminal runs a login shell everytime we open a new terminal window. For this reason, this is where we're going to configure our environment
* `.bashrc`
  - Executed before the command prompt anytime a new window/tab is opened. You'll see a shortcut that actually runs the **.bash_profile** when this script runs if you view the file. For our purposes, we'll leave it alone for this course. You'll want to make your edits to **.bash_profile** instead.

#### Opening .bash_profile for editing

You can open the **.bash_profile** using any text editor. 

Using the built in **Nano** editor: 

``` $ nano ~/.bash_profile ```

You can also use **Sublime**: 

``` $ subl ~/.bash_profile ```

**Important**: Whenever you make edits to the **.bash_profile** you either have to restart the terminal or enter the following command to tell Bash to reload the profile: 

``` $ source ~/.bash_profile ```

#### Creating an alias 

It's a pain to navigate to the class and homework repos sometimes. Let's create a couple of new aliases to make our lives easier in this course. 

Create an alias for changing to the class repo: 

```bash
# .bash_profile
alias class_repo='cd ~/code/wdi/wdi-atx-3-class'
```

Create an alias for changing to the homework repo: 

```bash
# .bash_profile
alias homework_repo='cd ~/code/wdi/wdi-atx-3-hw'
```

<hr>

### Exercise: Project Alias

**10 min**

We have the code for our class and homework repositories organized, but now let's keep our projects organized as well. 

1. In the `~/code/wdi` folder create a `projects` directory. This is where we'll put all our projects going forward
2. Create an alias for the command `project_repo` and have it automatically change to this directory when entered
3. Don't forget to `source` the **.bash_profile** for changes to take effect

<hr>

#### Editing the $PATH environment variable

The `$PATH` variable is specified in the **.bash_profile**. By editing the `$PATH`, we can add additional places the CLI will look for programs, like the Java runtime. The important thing to note is that you should always include the original `$PATH` or everything that came before it will be lost. 

## Working with Sublime

#### Opening files and folders

To open a file or folder in Sublime, you have a few different options. 

* From the command line, use the command `subl` to open a file or directory
* Drag a folder or file in Finder to the Sublime icon in your dock

The options above are great for a quick edit, but can be a pain to do every single time. What's recommended for working on classwork or homework files is the following: 

**Add the class and homework repos to a Sublime project**

1. Open the Sublime editor
2. In the top menu, go to: `Project` -> `Add Folder to Project`
3. Select the class repo and hit the `Open` button 
4. Repeat steps 2 and 3 for the homework repo
5. In the top menu, go to: `Project` -> `Save Project As...`
6. Enter a name for the project and save it

Now you'll be able to open Sublime at any time and see the entire contents of both directories, or even start other projects and switch workspaces seamlessly. 

#### Popular shortcuts

* `Cmd + S` - Save the currently selected file 
* `Cmd + F` - Find a particular string of characters in a file 
* `Option + Cmd + F` - Find and replace
* `Option + Cmd + 2` - Change the workspace to show two files side by side
* `Option + Cmd + 1` - Change the workspace to only show one file at a time
* `Cmd + C` - Copy the selected item to the clipboard
* `Cmd + V` - Paste the contents of the clipboard 
* `Cmd + X` - Remove the selected item and copy it to the clipboard
* `Cmd + Z` - Undo an action
* `Cmd + Y` - Redo an action
* `Cmd + A` - Select all items 
* `Ctrl + Tab` - Switch to the last file you selected 

#### Viewing different parts of the same file 

It's possible to have a split view and have the same file open on both columns. 

1. Open the file you want to edit
2. Split the workspace into two columns with `Option + Cmd + 2`
2. In the top menu, go to `File` -> `New View into File`
3. Drag the new view of the same file into the second column

## Working with Google Chrome

#### Popular shortcuts

* `Cmd + R` - Reload the current page
* `Cmd + T` - Open a new tab 
* `Ctrl + Tab` - Cycle through open tabs 
* `Option + Cmd + ->` - Switch to the tab on the right of the current one
* `Option + Cmd + <-` - Switch to the tab on the left of the current one 
* `Option + Cmd + I` - Open developer tools 
* `Option + Cmd + U` - View the HTML source

#### Googling for solutions to problems

* Be as specific as you can, then become more general in your queries
* Any sequence of words within quotes has to match exactly in that order. This can help you pinpoint solutions to very specific errors very quickly
* Keep in mind that languages have very similar constructs. Preface the search with the programming language you're working with. For example: `javascript "for loop"`

## Working with multiple applications 

#### Cmd + Tab

The shortcut `Cmd + Tab` should become instinct for you. Use it once to quickly switch to the last application you selected, leave `Cmd` down and hit tab multiple times to cycle through any other applications you have open. 

#### Spaces 

If you utilize [Spaces](https://support.apple.com/kb/PH18757) on Mac OSX, you'll be able to organize applications into groups and keep from having to minimize/maximize multiple windows constantly. You can switch between Spaces by swiping the trackpad with 3 fingers or using the shortcut `Ctrl` and the direction of the Space you want to navigate to. 

#### Multiple monitors

If you have an external monitor, improve your workspace by keeping Sublime on the larger screen (split view) and the browser on your laptop screen since you shouldn't need more space than that. 

## Bad habits to watch out for

* Too many tabs open 
* Multiple copies of the same file/folders
* Placing code in different locations on your computer
* Not pulling and pushing code for long periods of time
* Not pseudocoding and jumping into writing code without thinking

## Writing code 

* Proper spacing (1 tab = 2-4 spaces)
* Indent code for readability
* Be consistent in variable/selector naming 
* Use proper standards for case 
* Name files with all lowercase and no spaces

<hr>

### Exercise: A Second Chance

**20 min**

Now that we know how important consistency is, let's go back and practice refactoring some of our code from last Friday's lab. If you finish early, start going through your homework and refactor those as well. 

<hr>
