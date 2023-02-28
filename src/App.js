import PostList from './components/PostList';
import PostForm from './components/PostForm'

function App() {
  return (
    <div className='app'>
      <h1>Online Posts App</h1>
      <PostForm />
      <PostList />
    </div>
  );
}

export default App;
