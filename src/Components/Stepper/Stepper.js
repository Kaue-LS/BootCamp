import * as React from "react";
import * as S from './styled';
import PropTypes from "prop-types";
import { styled } from "@mui/material/styles";
import Stack from "@mui/material/Stack";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import { Check } from "@material-ui/icons";
import StepConnector, {
  stepConnectorClasses
} from "@mui/material/StepConnector";

const QontoConnector = styled(StepConnector)(({ theme }) => ({
  [`&.${stepConnectorClasses.alternativeLabel}`]: {
    top: 10,
    margin: '19px 0 0 0',
    left: "calc(-50% + 16px)",
    right: "calc(50% + 16px)"
  },
  [`&.${stepConnectorClasses.active}`]: {
    [`& .${stepConnectorClasses.line}`]: {
      borderColor: "#4f0381"
    }
  },
  [`&.${stepConnectorClasses.completed}`]: {
    [`& .${stepConnectorClasses.line}`]: {
      borderColor: "#4f0381",

    }
  },
  [`& .${stepConnectorClasses.line}`]: {
    borderColor:
      theme.palette.mode === "dark" ? theme.palette.grey[800] : "#DDDDDD",
    borderTopWidth: 5,
    borderRadius: 1
  }
}));

const QontoStepIconRoot = styled("div")(({ theme, ownerState }) => ({
  color: theme.palette.mode === "dark" ? theme.palette.grey[700] : "#DDDDDD",
  
  margin: '19px 0px 0 0',
  height: 22,
  alignItems: "center",
  ...(ownerState.active && {
    color: "#4f0381",
    fontSize:20,
  }),
  "& .QontoStepIcon-completedIcon": {
    color: "#FFFFFF",
    zIndex: 1,
    
    fontSize: 24,
    padding:'2px 2px',
  },
  "& .QontoStepIcon-circle": {
    width: 20,
    height: 20,
    borderRadius: "50%",
    border: " 5px solid currentColor"
  }
}));

function QontoStepIcon(props) {
  const { active, completed, className } = props;

  return (
    <QontoStepIconRoot ownerState={{ active }} className={className}>
      {completed ? (
        <Check style={{backgroundColor:'#4f0381',    borderRadius: "50%",}} className="QontoStepIcon-completedIcon" />
      ) : (
        <div className="QontoStepIcon-circle" />
      )}
    </QontoStepIconRoot>
  );
}

QontoStepIcon.propTypes = {
  /**
   * Whether this step is active.
   * @default false
   */
  active: PropTypes.bool,
  className: PropTypes.string,
  /**
   * Mark the step as completed. Is passed to child components.
   * @default false
   */
  completed: PropTypes.bool
};



const steps = [
  "Identificação",
  "Endereço",
  "Entrega",
  "Pagamento",
  "Revisão"
];

export default function CustomizedSteppers(props) {
  return (
    <S.StepperArea>
    <Stack sx={{ width: '100%' }}  spacing={4}>
      <Stepper  alternativeLabel activeStep={props.props} connector={<QontoConnector />}>
        {steps.map((label) => (
          <Step  key={label}>
            <StepLabel  StepIconComponent={QontoStepIcon}>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
    
    </Stack>
    </S.StepperArea>
  );
}
