# Angular 2 in Visual Studio Sample Project

### Introduction

This repo is a sample project that shows off Angular 2 Language Service support in Visual Studio.

### Usage

**Prerequisite:** Visual Studio 2017 Update 5 or later

To use this project:
 * `git clone https://github.com/Microsoft/angular2-in-visual-studio.git`
 * `cd angular2-in-visual-studio`
 * `npm install`
 * In Visual Studio, "Open Folder" (Ctrl-Alt-Shift-O or File -> Open -> Folder...)
 * Select the cloned directory (*not* `src`)

# Tour

Once the project is opened, you can observe these new behaviors

### Semantic Warnings

Open `src\app\app.component.ts`. The Angular2 language service warns you that the `InlineComponent` class doesn't belong to a module:

![Error about missing module](tour_images/no_module_error.png)

### Errors in Inline Templates

Still in `src\app\app.component.ts`, you can try editing the inline template in `InlineComponent`. The project includes a syntax error:

![Syntax error](tour_images/closing_tag_error.png)

Fix the syntax error by changing `</spa>` to `</span>`. You'll now see a semantic error:

![Inline semantic error](tour_images/semantic_inline_error.png)

Angular2 identified another mistake here - there is no method named `toLower`; fix this to `toLowerCase`. The error disappears:

![Errors resolved](tour_images/no_error.png)

### Navigation

Now that we've fixed the errors, let's try some navigation. Place the caret on `prop1` in the inline template. Open the context menu and select "Go to Definition":

![Go to Definition](tour_images/go_to_def.png)

This will take us to the definition of `prop1` in the corresponding component:

![Navigated](tour_images/navigated.png)

### .ngml Files

Open `src\app\app.component.ngml`. This is the template file for the corresponding class `AppComponent` in `app.component.ts`.
On line 5, place the caret on `prop1` and invoke "Go to Definition" again:

![Go to Definition from ngml](tour_images/ngml_go_to_def.png)

This navigates us to the `prop1` declaration in `app.component.ts`. Note that even though the file had two classes, both with properties named `prop1`, we were properly navigated to the correct one:

![Navigated from ngml](tour_images/ngml_navigated.png)

### Completions

In both inline templates and ngml files, we'll get completion lists.

Open `src\app\contact\contact.component.ngml`. Go to line 29 and place the caret to the right of `.` in `contactForm.status`, and press `Ctrl-Space` to open the completion list:

![Completions in ngml](tour_images/ngml_completion.png)

Visual Studio will display all the members of the `contactForm`. You can also see completions in NGML template positions. Place the caret on line `23` after `div`, and press `Ctrl-Space` to open the completion list:

![Template completions in ngml](tour_images/ngml_template_completions.png)

Now you'll see a list of the allowed attribute names, including those specific to Angular 2's template syntax, in the completion list.
