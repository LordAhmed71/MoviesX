import React from "react";

const People = ({ persons, job }) => {
  return (
    <>
      {persons?.length > 0 && (
        <div className="info">
          <span className="text bold">{job}:</span>
          <span className="text">
            {persons?.map((person, i) => (
              <span key={i}>
                {person?.name}
                {persons?.length - 1 !== i && ", "}
              </span>
            ))}
          </span>
        </div>
      )}
    </>
  );
};

export default People;
