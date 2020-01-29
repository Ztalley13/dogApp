import React from "react";
import "./style.css";

function EventsPage() {
    return (
        <body>
            <div className="container" id="container">

                <div className="field">
                    <label className="label">Name</label>
                    <div className="control">
                        <input className="input" type="text" placeholder="Text input" />
                    </div>
                </div>

                <div className="field">
                    <label className="label">Subject</label>
                    <div className="control" id="control">
                        <div className="select">
                            <select id="options">
                                <option id="options">Meet Up</option>
                                <option id="options">Pet Questions</option>
                                <option id="options">General</option>
                            </select>
                        </div>
                    </div>
                </div>

                <div className="field">
                    <label className="label">Details</label>
                    <div className="control">
                        <textarea className="textarea" id="textarea" placeholder="Textarea"></textarea>
                    </div>
                </div>

                <div className="field is-grouped">
                    <div className="control" >
                        <button className="button is-link" id="submit">Submit</button>
                    </div>
                </div>
            </div>
        </body >

    )
}

export default EventsPage;