export default {
  data() {
    return {
      required: (v) => !!v || "Required",
      email: (v) => /.+@.+\..+/.test(v) || "E-mail must be valid",
    };
  },
  methods: {
    onDigits(event) {
      let keyCode = event.keyCode;
      if (keyCode < 48 || keyCode > 57) {
        event.preventDefault();
      }
    },
  },
};
