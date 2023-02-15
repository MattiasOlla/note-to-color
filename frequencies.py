A = 440  # Hz
C_LIGHT = 299_792_458  # m/s

notes = ["A", "Bb", "B", "C", "Db", "D", "Eb", "E", "F", "Gb", "G", "Ab"]

visible_light_min_nm = 380
visible_light_max_nm = 750


def note2frequency(note_name: str) -> float:
    return A * 2 ** (notes.index(note_name) / 12)


def frequency2wavelength(frequency: float) -> float:
    return C_LIGHT / frequency


def find_visible_light_octave(frequency: float) -> tuple[float, int]:
    octaves = 0
    while (wavelength_nm := frequency2wavelength(frequency) * 1e9) > visible_light_max_nm:
        octaves += 1
        frequency *= 2
    return wavelength_nm, octaves


if __name__ == "__main__":
    note_name = input(f"Which note? ({','.join(notes)})\n").title()
    note_frequency = note2frequency(note_name=note_name)
    wavelength_as_light, num_octaves = find_visible_light_octave(note_frequency)
    print(f"{note_name}: {wavelength_as_light:.2f} nm ({num_octaves} octaves up)")
