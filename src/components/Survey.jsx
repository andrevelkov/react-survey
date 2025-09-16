import { useState } from "react";

function Survey() {
  const [open, setOpen] = useState(false); //Ignore this state

  const handleFormSubmit = (e) => {
    e.preventDefault()

    const formData = new FormData(e.target)
    const data = Object.fromEntries(formData.entries())

    // checkboxes with same name return only last value,
    // so use getAll for those
    data["spend-time"] = formData.getAll("spend-time")

    console.log(data);

    e.target.reset()
  }

  return (
    <main className="survey">
      <section className={`survey__list ${open ? "open" : ""}`}>
        <h2>Answers list</h2>
        {/* answers should go here */}

      </section>
      <section className="survey__form">
        {/* a form should be here */}

        <form className="form" onSubmit={handleFormSubmit}>
          <h2>Tell us what you think about your rubber duck!</h2>

          <div className="form__group radio">
            <h3>How do you rate your rubber duck colour?</h3>
            <ul>
              <li>
                <input id="color-one" type="radio" name="color" value="1" />
                <label htmlFor="color-one">1</label>
              </li>
              <li>
                <input id="color-two" type="radio" name="color" value="2" />
                <label htmlFor="color-two">2</label>
              </li>
              <li>
                <input id="color-three" type="radio" name="color" value="3" />
                <label htmlFor="color-three">3</label>
              </li>
              <li>
                <input id="color-four" type="radio" name="color" value="4" />
                <label htmlFor="color-four">4</label>
              </li>
            </ul>
          </div>

          <div className="form__group">
            <h3>How do you like to spend time with your rubber duck</h3>
            <ul>
              <li>
                <label>
                  <input name="spend-time" type="checkbox" value="swimming"/>
                  Swimming
                </label>
              </li>
              <li>
                <label>
                  <input name="spend-time" type="checkbox" value="bathing" />
                  Bathing
                </label>
              </li>
              <li>
                <label>
                  <input name="spend-time" type="checkbox" value="chatting"/>
                  Chatting
                </label>
              </li>
              <li>
                <label>
                  <input name="spend-time" type="checkbox" value="noTime" />
                  I do not like to spend time with it
                </label>
              </li>
            </ul>
          </div>

          <label>
            What else have you got to say about your rubber duck?
            <textarea name="review" cols="30" rows="10"></textarea>
          </label>
            
          <label>
            Put your name here (if you feel like it):
            <input type="text" name="username" defaultValue={""} />
          </label>
              
          <label>
            Leave us your email pretty please??
            <input type="email" name="email" defaultValue={""}/>
          </label>
          
          <input className="form__submit" type="submit" value="Submit Survey!" />
        </form>

      </section>
    </main>
  );
}

export default Survey;
