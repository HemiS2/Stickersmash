import { StyleSheet, Text, View, Pressable } from 'react-native'

type Props = {
    label: string;
  }

export default function Button({ label }: Props ) {
  return (
    <View style={styles.buttonContainer}>
    <Pressable style={styles.button} onPress={() => alert('AHHHHHHHHHHHHHHH')}>
      <Text style={styles.buttonLabel}>Button</Text>
    </Pressable>
    </View>
  )
}

const styles = StyleSheet.create({
    buttonContainer: {
        width: 320,
        height: 68,
        marginHorizontal: 20,
        alignItems: "center",
        justifyContent: "center"
        flexDirection: "row"
    },
    button: {
        width: 320,
        height: 68,
        marginHorizontal: 20,
        alignItems: "center",
        justifyContent: "center"
        flexDirection: "row"
    },
    buttonLabel: {
        width: 320,
        height: 68,
        marginHorizontal: 20,
        alignItems: "center",
        justifyContent: "center"
        flexDirection: "row"
    }
})