import styles from "./GameScreen.module.css"
import Button from "./Button"

const GameScreen = () => {
    let pontos = 230
    let dica = "Animal"
    let tentativas = 2
    let chutes = ["a", "d", "e"]

    return (
    <div>
        <p className={styles.Game_p}>Pontos: {pontos}</p>

        <h2 className={styles.Game_h2}>Adivinhe a palavra:</h2>
    
        <p className={styles.Game_p} style={{paddingTop: "300px"}}>Dica: {dica}</p>

        <p className={styles.Game_p}>Tentativas restantes: {tentativas}</p>

        <p className={styles.Game_p}>Tente adivinhar uma letra da palavra: </p>

        <label className={styles.Guess}>
            <input type="text" />
            <Button text="TENTAR" />
        </label>

        <p className={styles.Game_p}>Chutes: {chutes}</p>
    </div>
    )
}

export default GameScreen