const AIService = require('../services/aiService');

/**
 * @desc    Submit content for analysis
 * @route   POST /api/v1/analyze
 * @access  Public
 */
exports.runAnalysis = async (req, res, next) => {
  try {
    const { text, url, image_base64, modality } = req.body;

    if (!text && !url && !image_base64) {
      return res.status(400).json({
        success: false,
        error: 'Please provide valid input (text, url, or image)'
      });
    }

    let report;

    // Route to appropriate AI service based on modality
    if (modality === 'image' || image_base64) {
      report = await AIService.analyzeImage(image_base64);
    } else {
      report = await AIService.analyzeText(text || url);
    }

    // Return the forensic report
    res.status(200).json({
      success: true,
      data: {
        ...report,
        timestamp: new Date().toISOString()
      }
    });

  } catch (error) {
    console.error(`[Analysis Error]: ${error.message}`);
    res.status(500).json({
      success: false,
      error: 'Server Error during forensic analysis'
    });
  }
};
