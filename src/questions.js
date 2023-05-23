



function Questions(props){

    let questions = props.questions;
  
    return(
      <div>
        {
          questions.map((a,i)=>{
  
            return(
              <div>
                {a}
                



              </div>
            )
          })
        }
      </div>
    )
  }


  export default Questions;