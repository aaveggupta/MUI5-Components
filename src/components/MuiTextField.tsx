import React from "react";
import { Stack, TextField, InputAdornment } from "@mui/material";

import { useState } from "react";

function MuiTextField() {
  const [value, setValue] = useState<string>("");

  return (
    <Stack spacing={4}>
      <Stack direction="row" spacing={2}>
        {/* OUTLINED IS DEFAULT VARIANT */}
        <TextField label="Name" />
        <TextField label="Name" variant="filled" />
        <TextField label="Name" variant="standard" />
      </Stack>

      <Stack direction="row" spacing={2}>
        <TextField label="Small Secondary" size="small" color="secondary" />
      </Stack>

      <Stack direction="row" spacing={2}>
        <TextField
          label="Form Input"
          required
          value={value}
          onChange={(e) => setValue(e.target.value)}
          error={!value}
          helperText={!value ? "Required" : "Do not share it"}
        />
        <TextField
          label="Password"
          type="password"
          helperText="Do not share password"
        />
        <TextField label="Read Only" InputProps={{ readOnly: true }} />
      </Stack>

      <Stack direction="row" spacing={2}>
        <TextField
          label="Amount"
          InputProps={{
            startAdornment: <InputAdornment position="start">$</InputAdornment>,
          }}
        />
        <TextField
          label="Weight"
          InputProps={{
            endAdornment: <InputAdornment position="end">Kg</InputAdornment>,
          }}
        />
      </Stack>
    </Stack>
  );
}

export default MuiTextField;
