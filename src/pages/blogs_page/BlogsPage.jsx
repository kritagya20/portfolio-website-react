import './BlogsPage.css';
import {Article} from '../../components/index';
import {articleList} from '../../data';

function BlogsPage() {
  return (
    <main className='blogs_page'>
        <div className="bp__heading">
            <h1>Blogs</h1>
        </div>
        <div className="bp__wrapper">
            <ol className="bp__list">
            { articleList.map((element, index) => {
              return  (
                <Article 
                  id= {element.key}
                  link = {element.link}
                  title= {element.title}
                  description= {element.description}
                  date= {element.date}
                />
              )
            })
          }

            </ol>
        </div>
    </main> 

  )
}

export default BlogsPage;
