import React from "react";
import PropTypes from "prop-types";
import { View, StyleSheet } from "react-native";
import LinearGradient from "react-native-linear-gradient";
import { ToggleIcon, Time, Scrubber, Live } from "./";

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    height: 35,
    alignSelf: "stretch",
    justifyContent: "flex-end"
  }
});

const ControlBar = props => {
  const {
    onSeek,
    onSeekRelease,
    progress,
    currentTime,
    duration,
    muted,
    fullscreen,
    theme,
    inlineOnly,
    streaming
  } = props;

  if (streaming) {
    return (
      <LinearGradient
        colors={["rgba(0,0,0,0)", "rgba(0,0,0,0.75)"]}
        style={[styles.container, { justifyContent: "space-between" }]}
      >
        <View style={{ flexDirection: "row" }}>
          <ToggleIcon
            paddingLeft
            theme={theme.volume}
            onPress={() => props.toggleMute()}
            isOn={muted}
            iconOff="volume-up"
            iconOn="volume-mute"
            size={20}
          />
          <Live />
        </View>

        <View>
          <ToggleIcon
            paddingRight
            onPress={() => props.toggleFS()}
            iconOff="fullscreen"
            iconOn="fullscreen-exit"
            isOn={fullscreen}
            theme={theme.fullscreen}
          />
        </View>
      </LinearGradient>
    );
  }

  return (
    <LinearGradient
      colors={["rgba(0,0,0,0)", "rgba(0,0,0,0.75)"]}
      style={styles.container}
    >
      <Time time={currentTime} theme={theme.seconds} />

      <Scrubber
        onSeek={pos => onSeek(pos)}
        onSeekRelease={pos => onSeekRelease(pos)}
        progress={progress}
        theme={{
          scrubberThumb: theme.scrubberThumb,
          scrubberBar: theme.scrubberBar
        }}
      />

      <ToggleIcon
        paddingLeft
        theme={theme.volume}
        onPress={() => props.toggleMute()}
        isOn={muted}
        iconOff="volume-up"
        iconOn="volume-mute"
        size={20}
      />

      <Time time={duration} theme={theme.duration} />

      {!inlineOnly && (
        <ToggleIcon
          paddingRight
          onPress={() => props.toggleFS()}
          iconOff="fullscreen"
          iconOn="fullscreen-exit"
          isOn={fullscreen}
          theme={theme.fullscreen}
        />
      )}
    </LinearGradient>
  );
};

ControlBar.propTypes = {
  toggleFS: PropTypes.func.isRequired,
  toggleMute: PropTypes.func.isRequired,
  onSeek: PropTypes.func.isRequired,
  onSeekRelease: PropTypes.func.isRequired,
  fullscreen: PropTypes.bool.isRequired,
  muted: PropTypes.bool.isRequired,
  inlineOnly: PropTypes.bool.isRequired,
  progress: PropTypes.number.isRequired,
  currentTime: PropTypes.number.isRequired,
  duration: PropTypes.number.isRequired,
  theme: PropTypes.object.isRequired
};

export { ControlBar };
