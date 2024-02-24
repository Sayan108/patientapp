import React from 'react';
import {View, useWindowDimensions, StyleSheet} from 'react-native';
import {Chip, Text} from 'react-native-paper';

interface ChipsGridProps {
  data: string[];
  onSelect: (item: string) => void;
}

const ChipsGrid: React.FC<ChipsGridProps> = ({data, onSelect}) => {
  const windowWidth = useWindowDimensions().width;

  const handleChipPress = (item: string) => {
    onSelect(item);
  };

  const calculateChipWidth = (text: string) => {
    const textWidth = text.length * 8; // Assuming each character takes 8 units of width
    return textWidth + 32; // Adding padding to the chip
  };

  const renderChips = () => {
    return data.map((chip, index) => (
      <Chip
        key={index}
        style={[styles.chip, {width: calculateChipWidth(chip)}]}
        onPress={() => handleChipPress(chip)}
        mode="outlined">
        {chip}
      </Chip>
    ));
  };

  return <View style={styles.container}>{renderChips()}</View>;
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'flex-start',
    alignItems: 'center',
    padding: 8,
  },
  chip: {
    margin: 4,
    borderRadius: 30,
  },
});

export default ChipsGrid;
