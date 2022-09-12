import React from 'react'
import { useNavigate } from 'react-router-dom'
import './Aboutus.css'

const Aboutus = () => {
    let navigate = useNavigate()
  return (
    <div>
    <section className='about'>
        <h2 class="head1">OUR TUTORS </h2>
        <div class="row">
            <div class="box1">
                <h3 class="headings">EDUCATE</h3>
                <img className="imageedu"
      src="https://i.pinimg.com/736x/03/46/d4/0346d4dc9b0970c91aa1fed08803bd2e.jpg"
      alt="new"
      />
                <p> Teacher, also called a schoolteacher or formally an educator, is a person who helps students to acquire knowledge, competence or virtue.                Informally the role of teacher may be taken on by anyone (e.g. when showing a colleague how to perform a specific task). In some countries, teaching young people of school age may be carried out in an informal setting, such as within the family (homeschooling), rather than in a formal setting such as a school or college. Some other professions may involve a significant amount of teaching (e.g. youth worker, pastor). </p>
                <button className='goto-reviews' onClick={()=>{ navigate('/review')}}>Reviews</button>
            </div>

            <div class="box2">
                
                <h3 class="headings">Mrs. Galleher Helene </h3>
                <img className="imagemadam"
      src="https://i.pinimg.com/564x/a2/34/3e/a2343e6e1c717721c46612cca4795939.jpg"
      alt="new"
      />
                <p> Between the ages of 7 and 14 I developed a crippling stutter that had me struggling to even hold a simple conversation. "I was a smart kid and had a lot to say, but I just couldn't say it, I never thought I'd be able to sit and talk to someone out loud confidently."
                It was one teacher in particular that helped me overcome my fear of speaking by encouraging me to try out for the school play. At first, I resisted the idea, but the teacher wouldn't give up on me and coaxed me to take acting lessons and experiment with different accents and character voices to help express myself. In the end, those efforts paid off for me immensely. </p>
            </div>
            <div class="box3">
                
                <h3 class="headings">Mr. Galleher Peterson</h3>
                <img className="sensei"
      src="https://i.pinimg.com/564x/5c/7c/72/5c7c72041d3dd3079f7744882923daa3.jpg"
      alt="new"
      />
                <p>I became a teacher because I love seeing the world through kids’ eyes. I loved music, math, art, and kids. Elementary allows me to do it all!!!
                My calling came in my 30’s during the high point in my IT career. It was something that couldn’t be ignored. I wouldn’t change it for the world.It was the only major that didn’t require a foreign language. But, all kidding aside, it was the path I was meant to take!
                The innocence and wonder of a young child make the drama and nonsense of the real world melt away for a little while. I wanted summers off.</p>
            </div>
        </div>
    </section>
    
    </div>
  )
}

export default Aboutus