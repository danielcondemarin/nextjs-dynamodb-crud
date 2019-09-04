module.exports = {
  target: "serverless",
  webpack: config => {
    if (!process.env.BUNDLE_AWS_SDK) {
      config.externals = config.externals || [];
      config.externals.push({ 'aws-sdk': 'aws-sdk' })
    }

    return config;
  }
};