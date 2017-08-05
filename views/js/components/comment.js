      <div className="content__event__comment">
          <div>Comment:</div>
          <div>
            <textarea value={props.comment} name="comment" className="content__event__commentbox" maxLength="120" placeholder="120 maximum character"></textarea>
          </div>
          <div>
            <button onClick={props.eventClick} className="btn__rsvp"> Submit </button>
          </div>
      </div>    