
class Mode {
    #mode = 'slinky'

    getMode() {
        return this.#mode;
    }

    setMode(name) {
        this.#mode  = name;
    }
}

export const mode = new Mode();