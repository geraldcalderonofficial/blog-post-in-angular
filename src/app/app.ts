import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Navbar } from './core/components/navbar/navbar';
import { CreatePost } from './features/post/pages/create-post/create-post';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Navbar, CreatePost],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('dev-pulse');
}
