import React from 'react';
import {View, useWindowDimensions, StyleSheet} from 'react-native';
import {Chip, Text} from 'react-native-paper';
import {colors} from '../styles';

interface ChipsGridProps {
  data: any[];
  onSelect: (item: any) => void;
  selectedId: number;
}

const ChipsGrid: React.FC<ChipsGridProps> = ({data, onSelect, selectedId}) => {
  const windowWidth = useWindowDimensions().width;

  const handleChipPress = (item: number) => {
    onSelect(item);
  };

  const calculateChipWidth = (text: string) => {
    const textWidth = text.length * 8; // Assuming each character takes 8 units of width
    return textWidth + 32; // Adding padding to the chip
  };

  const renderChips = () => {
    return data.map((chip: any, index: number) => (
      <Chip
        key={index}
        style={[
          styles.chipNotSelected,
          {
            // width: calculateChipWidth(chip.value),
            backgroundColor:
              chip.id === selectedId ? 'rgba(245, 71, 73, 0.3)' : 'white',
          },
        ]}
        onPress={() => handleChipPress(chip)}
        mode="outlined">
        {chip.value}
      </Chip>
    ));
  };

  return <View style={styles.container}>{renderChips()}</View>;
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 8,
  },
  chipSelected: {
    margin: 4,
    borderRadius: 30,
    borderColor: colors.primaryColor,
  },
  chipNotSelected: {
    width: 100,
    margin: 4,
    borderRadius: 30,
    borderColor: colors.primaryColor,
  },
});

export default ChipsGrid;
