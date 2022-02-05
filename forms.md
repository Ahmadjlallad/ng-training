# Forms in Angular

## template-driven form

- using FormsModule we have to import FormsModule in app.module.ts in the imports array

### Template-driven forms rely on directives defined in the FormsModule

angular will carate a js object with the form data when it detects a form element
using FormsModule and ngSubmit directive + get the local reference of the form and tell angular to make a
form reference to the form element `#f="ngForm"`

````html
<form (ngSubmit)="onSubmit(f)" #f="ngForm">```</form>
````

the f will be a NgForm object or get a reference to the form element using ViewChild

```ts
  onSubmit(f: NgForm) {
    console.log(f);
  }
```

it will return a NgForm object with the form data

### we can add required validator to the form its not the validation of the html 5 its angular validation

### and angular give us the some tools to validate the form

---

### we have to relay on the angular FormModel to get the form data and to handle the form submission event validation

## Reactive form we create the form programmatically
