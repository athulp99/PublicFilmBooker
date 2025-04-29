import { View, Text, FlatList, StyleSheet } from "react-native";
import DropDownPicker from "react-native-dropdown-picker";
import { useState } from "react";

const films = [
  { id: 1, title: "Dune: Part Two", cinema: "Odeon", showtimes: ["13:00", "16:00", "19:00"] },
  { id: 2, title: "Godzilla x Kong", cinema: "Vue", showtimes: ["12:00", "15:00", "18:00", "21:00"] },
  { id: 3, title: "Kung Fu Panda 4", cinema: "Cineworld", showtimes: ["11:30", "14:30", "17:30"] }
];

export default function WhatsOn() {
  const [open, setOpen] = useState(false);
  const [cinemaFilter, setCinemaFilter] = useState('All');
  const [items, setItems] = useState([
    { label: 'All Cinemas', value: 'All' },
    { label: 'Odeon', value: 'Odeon' },
    { label: 'Vue', value: 'Vue' },
    { label: 'Cineworld', value: 'Cineworld' },
  ]);

  const filteredFilms = films.filter((film) => {
    const matchesCinema = cinemaFilter === 'All' || film.cinema === cinemaFilter;
    return matchesCinema;
  });

  return (
    <View style={styles.container}>
      <Text style={styles.title}>What's On 🎬</Text>

      {/* Filter */}
      <DropDownPicker
        open={open}
        value={cinemaFilter}
        items={items}
        setOpen={setOpen}
        setValue={setCinemaFilter}
        setItems={setItems}
        style={styles.dropdown}
      />

      {/* Films List */}
      <FlatList
        data={filteredFilms}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.filmCard}>
            <Text style={styles.filmTitle}>{item.title}</Text>
            <Text style={styles.filmCinema}>{item.cinema}</Text>
            <Text style={styles.filmShowtimes}>
              Showtimes: {item.showtimes.join(", ")}
            </Text>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: "#fff" },
  title: { fontSize: 24, fontWeight: "bold", marginBottom: 20 },
  dropdown: { marginBottom: 20, height: 50 },
  filmCard: { marginBottom: 20, padding: 15, borderWidth: 1, borderRadius: 8 },
  filmTitle: { fontSize: 20, fontWeight: "bold" },
  filmCinema: { fontSize: 16, color: "gray", marginTop: 5 },
  filmShowtimes: { fontSize: 14, marginTop: 5 }
});
