import React from 'react'

export default function Footer() {
    const footerStyle = {
        position: 'fixed',
        bottom: '0px',
        width: '100%'
    }

    return (
        <footer className="footer" style={footerStyle}>
            <div class="content has-text-centered">
                <p><strong>O Bonito</strong> - Todos os direitos reservados</p>
            </div>
        </footer>
    )
}
