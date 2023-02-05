import React, { useState } from "react";

function ModeCalculator() {
    const [permissions, setPermissions] = useState({
        owner: {
            read: false,
            write: true,
            execute: false,
        },
        group: {
            read: false,
            write: false,
            execute: false,
        },
        public: {
            read: false,
            write: false,
            execute: false,
        },
    });

    console.log("Permissions: ", permissions);

    return (
        <div>
            <h1>Calculator</h1>
            <fieldset>
                <legend>Owner's permissions</legend>
                {Object.keys(permissions.owner).map((permission) => (
                    <div>
                        <p>{permission}</p>
                        <input key={permission} type="checkbox" id={permission} name={permission}
                            // {permissions}
                            checked />
                        <label htmlFor={permission}>{permission}</label>
                    </div>
                ))}
            </fieldset>
        </div>
    );
}

export default ModeCalculator;
