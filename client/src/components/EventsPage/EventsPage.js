import React from "react";
import "./style.css";

function EventsPage() {
    return (
        <body>
            <div className="container">
                <div className="row">
                    <div className="row">
                        <div className="col-sm-2 mt-4">
                            <a className="btn btn-light" href="/blog">Go to Blog</a>
                        </div>
                    </div>
                    <div className="col-md-5 offset-md-3">
                        <form id="cms">
                            <div className="form-group">
                                <label for="title">Title:</label>
                                <input type="text" className="form-control" id="title" />
                                <br />
                                <label for="body">Body:</label>
                                <textarea className="form-control" rows="10" id="body"></textarea>
                                <div className="form-group">
                                    <div className="control">
                                        <div className="select">
                                            <select>
                                                <option>Select dropdown</option>
                                                <option>Meet Up</option>
                                                <option>Meet Up</option>
                                                <option>Meet Up</option>

                                            </select>
                                        </div>
                                    </div>                                </div>
                                <br />
                                <div className="control">
                                    <button className="button is-primary">Submit</button>
                                </div>                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <script src="js/cms.js" type="text/javascript"></script>
        </body>

    )
}

export default EventsPage;