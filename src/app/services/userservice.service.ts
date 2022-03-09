import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { forkJoin, Observable} from 'rxjs';
import { map, switchMap } from 'rxjs/operators';
import { Posts, User } from '../Models/user';
import { environment } from '../../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class UserserviceService {
  configUrl = environment.apiUrl;
  constructor(private http: HttpClient) { }


  //Get method to fetch Users from the API
getUsers(){
 return this.http.get<User[]>(this.configUrl + '/users');
}

//Get method to fetch Posts for the given userId
getpost(userId){
  return this.http.get(this.configUrl + '/posts?userId=' + userId);
}
//Get method to fetch Comments for the given postId
getcomments(postId){
  return this.http.get(this.configUrl + '/comments?postId=' + postId);
}

// SwitchMap and forkjoin is used to merge API calls subscriptions. 
// Inner observables is also subscribed and values are emitted by source observable.
getUserData() {
  return this.getUsers()
    .pipe(
      switchMap((users: User[]) => forkJoin(
        ...users.map((user: User) => {
          return this.getpost(user.id).pipe(
            switchMap((posts: Posts[]) => forkJoin(
              ...posts.map(post => {
                if(user.id == post.userId){
                    user.posts = posts;
                 }
                return this.getcomments(post.id).pipe(
                  map((comment: any) =>
                  {
                     for (let p = 0; p < user.posts.length; p++) {
                       for (let c = 0; c < comment.length; c++) {
                        if(user.posts[p].id == comment[c].postId){
                          user.posts[p].comments =  comment.length;
                        }
                       }
                     }
                     return users;
                  }
                  ),
                );
              }),
            )),
          );
        }),
      )),
    ) 
}

//POST method to Post data for the given userId
postComments(post:Posts) : Observable<any> {
 // const body=JSON.stringify(post);
 return this.http.post(this.configUrl + '/posts',post);
}
}


