import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-create-post',
  imports: [],
  templateUrl: './create-post.html',
  styleUrl: './create-post.css',
})
export class CreatePost {
  createPostForm = new FormGroup({
    // title: new FormControl<string>('', [Validators.required, Validators.minLength(6), Validators.maxLength(100)]
    // })
    title: new FormControl<string>('', {
      nonNullable: true,
    }),
    content: new FormControl<string>('', {
      nonNullable: true,
    }),
  });

  get title() {
    return this.createPostForm.controls.title;
  }

  get content() {
    return this.createPostForm.controls.content;
  }

  onFormSubmit() {
    console.log(this.createPostForm.value);
  }
}
