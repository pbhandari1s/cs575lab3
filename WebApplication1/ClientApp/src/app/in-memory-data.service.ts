import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Blog } from './Blog';
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
    createDb() {
        const blogs = [
            {
                "id": 1,
                "title": "Blog Title 1",
                "intro": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
                "content": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent elementum, ex vitae vulputate convallis, ipsum tellus semper tellus, eu lacinia erat ipsum ac nulla.Donec sit amet turpis a mi semper venenatis.Etiam bibendum Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent elementum, ex vitae vulputate convallis, ipsum tellus semper tellus, eu lacinia erat ipsum ac nulla.Donec sit amet turpis a mi semper venenatis.Etiam bibendum Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent elementum, ex vitae vulputate convallis, ipsum tellus semper tellus, eu lacinia erat ipsum ac nulla.Donec sit amet turpis a mi semper venenatis.Etiam bibendum Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent elementum, ex vitae vulputate convallis, ipsum tellus semper tellus, eu lacinia erat ipsum ac nulla.Donec sit amet turpis a mi semper venenatis.Etiam bibendum"
            },
            {
                "id": 2,
                "title": "Blog Title 2",
                "intro": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
                "content": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent elementum, ex vitae vulputate convallis, ipsum tellus semper tellus, eu lacinia erat ipsum ac nulla.Donec sit amet turpis a mi semper venenatis.Etiam bibendum Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent elementum, ex vitae vulputate convallis, ipsum tellus semper tellus, eu lacinia erat ipsum ac nulla.Donec sit amet turpis a mi semper venenatis.Etiam bibendum Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent elementum, ex vitae vulputate convallis, ipsum tellus semper tellus, eu lacinia erat ipsum ac nulla.Donec sit amet turpis a mi semper venenatis.Etiam bibendum Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent elementum, ex vitae vulputate convallis, ipsum tellus semper tellus, eu lacinia erat ipsum ac nulla.Donec sit amet turpis a mi semper venenatis.Etiam bibendum"
            },
            {
                "id": 3,
                "title": "Blog Title 3",
                "intro": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
                "content": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent elementum, ex vitae vulputate convallis, ipsum tellus semper tellus, eu lacinia erat ipsum ac nulla.Donec sit amet turpis a mi semper venenatis.Etiam bibendum Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent elementum, ex vitae vulputate convallis, ipsum tellus semper tellus, eu lacinia erat ipsum ac nulla.Donec sit amet turpis a mi semper venenatis.Etiam bibendum Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent elementum, ex vitae vulputate convallis, ipsum tellus semper tellus, eu lacinia erat ipsum ac nulla.Donec sit amet turpis a mi semper venenatis.Etiam bibendum Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent elementum, ex vitae vulputate convallis, ipsum tellus semper tellus, eu lacinia erat ipsum ac nulla.Donec sit amet turpis a mi semper venenatis.Etiam bibendum"
            },
            {
                "id": 4,
                "title": "Blog Title 4",
                "intro": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
                "content": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent elementum, ex vitae vulputate convallis, ipsum tellus semper tellus, eu lacinia erat ipsum ac nulla.Donec sit amet turpis a mi semper venenatis.Etiam bibendum Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent elementum, ex vitae vulputate convallis, ipsum tellus semper tellus, eu lacinia erat ipsum ac nulla.Donec sit amet turpis a mi semper venenatis.Etiam bibendum Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent elementum, ex vitae vulputate convallis, ipsum tellus semper tellus, eu lacinia erat ipsum ac nulla.Donec sit amet turpis a mi semper venenatis.Etiam bibendum Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent elementum, ex vitae vulputate convallis, ipsum tellus semper tellus, eu lacinia erat ipsum ac nulla.Donec sit amet turpis a mi semper venenatis.Etiam bibendum"
            },
            {
                "id": 5,
                "title": "Blog Title 5",
                "intro": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
                "content": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent elementum, ex vitae vulputate convallis, ipsum tellus semper tellus, eu lacinia erat ipsum ac nulla.Donec sit amet turpis a mi semper venenatis.Etiam bibendum Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent elementum, ex vitae vulputate convallis, ipsum tellus semper tellus, eu lacinia erat ipsum ac nulla.Donec sit amet turpis a mi semper venenatis.Etiam bibendum Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent elementum, ex vitae vulputate convallis, ipsum tellus semper tellus, eu lacinia erat ipsum ac nulla.Donec sit amet turpis a mi semper venenatis.Etiam bibendum Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent elementum, ex vitae vulputate convallis, ipsum tellus semper tellus, eu lacinia erat ipsum ac nulla.Donec sit amet turpis a mi semper venenatis.Etiam bibendum"
            },
            {
                "id": 6,
                "title": "Blog Title 6",
                "intro": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
                "content": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent elementum, ex vitae vulputate convallis, ipsum tellus semper tellus, eu lacinia erat ipsum ac nulla.Donec sit amet turpis a mi semper venenatis.Etiam bibendum Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent elementum, ex vitae vulputate convallis, ipsum tellus semper tellus, eu lacinia erat ipsum ac nulla.Donec sit amet turpis a mi semper venenatis.Etiam bibendum Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent elementum, ex vitae vulputate convallis, ipsum tellus semper tellus, eu lacinia erat ipsum ac nulla.Donec sit amet turpis a mi semper venenatis.Etiam bibendum Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent elementum, ex vitae vulputate convallis, ipsum tellus semper tellus, eu lacinia erat ipsum ac nulla.Donec sit amet turpis a mi semper venenatis.Etiam bibendum"
            }
        ];
        return { blogs };
    }

    // Overrides the genId method to ensure that a hero always has an id.
    // If the blogs array is empty,
    // the method below returns the initial number (1).
    // if the blogs array is not empty, the method below returns the highest
    // blog id + 1.
    genId(blogs: Blog[]): number {
        return blogs.length > 0 ? Math.max(...blogs.map(blog => blog.id)) + 1 : 1;
    }
}
