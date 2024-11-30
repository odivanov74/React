import './Article.css';
import male from './icons/male.png';
import female from './icons/female.png';
function Article(props)
{
  console.log(props.db);
  
      //if(props.db["people"][0].pol == "male") icon = male;
      //else icon = female;

       
    return (
      <div className='app'>
        {
          Object.keys(props.db["people"]).map(item =>
          { 
            let people = props.db["people"][item];
            let icon = people.pol == "male" ? male : female;
            
            //console.log(people);
            return(
            <div className = "card">
              <img src={people.photo} alt="" />

              <div className="name">
                {people.name + ' ' + people.surname}
              </div>

              <div className="pol">
                <img src={icon} alt="" />
              </div>
                      
              <div className="age">
                {people.age}
              </div>
            </div>
            )
          })
        }
      </div>
      
    )
           //{console.log("Hello")}
          //  <article></article>)
}
export default Article;