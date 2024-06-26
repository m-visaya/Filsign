import {
  Box,
  Heading,
  Icon,
  HStack,
  Text,
  Image,
  Button,
  ScrollView,
  IconButton,
  Spacer,
} from "native-base";
import {
  FontAwesome5,
  Feather,
  MaterialCommunityIcons,
} from "@expo/vector-icons";
import { images } from "./utils";

const HomeScreen = ({ navigation }) => {
  const Illust1 = require("../assets/Home.png");
  const Logo = require("../assets/icon.png");

  return (
    <Box style={{ flex: 1 }} bg="white" safeArea>
      <ScrollView showsVerticalScrollIndicator={false}>
        <HStack
          px="4"
          py="4"
          justifyContent="space-between"
          alignItems="center"
          w="100%"
        >
          <HStack alignItems="center">
            <Image
              source={Logo}
              size={"2xs"}
              resizeMode="contain"
              alt="Filsign"
            ></Image>
            <Text
              fontSize="xl"
              fontWeight="bold"
              marginLeft={"1"}
              color={"darkBlue.700"}
            >
              FilSign
            </Text>
            <Spacer></Spacer>
            <IconButton
              borderRadius="full"
              colorScheme={"light"}
              icon={
                <Icon
                  as={MaterialCommunityIcons}
                  name="dots-vertical"
                  size={"md"}
                />
              }
              onPress={() => navigation.navigate("Config")}
            ></IconButton>
          </HStack>
        </HStack>
        <Box style={{ flex: 1 }}>
          <Heading
            size={"3xl"}
            letterSpacing={"xl"}
            fontWeight={"normal"}
            marginX={5}
          >
            Learn{" "}
            <Text color={"darkBlue.700"} fontWeight={"bold"}>
              FSL
            </Text>{" "}
            {""}
            through
            <Text color={"darkBlue.700"} fontWeight={"bold"}>
              {" "}
              AI
            </Text>
          </Heading>
          <Image source={Illust1} alt="FSL Illustration" height={"56"}></Image>
          <Box marginY={10} marginX={4}>
            <Heading
              color={"darkBlue.700"}
              fontWeight={"medium"}
              fontSize={"xl"}
            >
              Classify FSL
            </Heading>
            <HStack justifyContent={"center"} paddingTop={"5"} space={"5"}>
              <Button
                height={"24"}
                width={"24"}
                colorScheme={"dark"}
                bg={"white"}
                borderRadius="2xl"
                shadow="3"
                onPress={() => navigation.navigate("Capture")}
              >
                <Icon
                  as={FontAwesome5}
                  name="camera-retro"
                  size="2xl"
                  alignSelf={"center"}
                  color={"teal.600"}
                />
                <Text
                  marginTop={"1"}
                  color={"darkBlue.700"}
                  fontSize={"2xs"}
                  textTransform={"uppercase"}
                >
                  Capture
                </Text>
              </Button>
              <Button
                height={"24"}
                width={"24"}
                colorScheme={"dark"}
                bg={"white"}
                borderRadius="2xl"
                shadow="3"
                onPress={() => navigation.navigate("Live")}
              >
                <Icon
                  as={Feather}
                  name="radio"
                  size="2xl"
                  color={"red.600"}
                  marginLeft={"0.5"}
                />
                <Text
                  marginTop={"1"}
                  color={"darkBlue.700"}
                  fontSize={"2xs"}
                  textTransform={"uppercase"}
                  textAlign={"center"}
                >
                  Live
                </Text>
              </Button>
              <Button
                height={"24"}
                width={"24"}
                colorScheme={"dark"}
                bg={"white"}
                borderRadius="2xl"
                shadow="3"
                onPress={() => navigation.navigate("Media")}
              >
                <Icon
                  as={FontAwesome5}
                  name="image"
                  size="2xl"
                  alignSelf={"center"}
                  color={"darkBlue.700"}
                />
                <Text
                  marginTop={"1"}
                  color={"darkBlue.700"}
                  fontSize={"2xs"}
                  textTransform={"uppercase"}
                >
                  Image
                </Text>
              </Button>
            </HStack>
          </Box>
          <Box marginX={4}>
            <Heading
              color={"darkBlue.700"}
              fontWeight={"medium"}
              fontSize={"xl"}
            >
              Sign Languages
            </Heading>
            <HStack flexWrap={"wrap"} paddingTop={"5"}>
              {images.map((val, idx) => (
                <Box width={"43%"} marginBottom={"5"} marginX="auto" key={idx}>
                  <Image
                    resizeMode="contain"
                    height={"40"}
                    borderRadius={"2xl"}
                    source={val[0]}
                    alt="Sign language"
                  />
                  <Text
                    marginTop={"1"}
                    textAlign={"center"}
                    fontWeight={"medium"}
                  >
                    {val[1]}
                  </Text>
                </Box>
              ))}
            </HStack>
          </Box>
        </Box>
      </ScrollView>
    </Box>
  );
};

export default HomeScreen;
