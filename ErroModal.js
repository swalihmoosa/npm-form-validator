import React from "react";

function ErroModal({ onClose, children }) {
    return (
        <div className="modal">
            <div className="modal-content">
                <button className="modal-close-button" onClick={onClose}>
                    &times;
                </button>
                {children}
            </div>
        </div>
    );
}

export default ErroModal;
